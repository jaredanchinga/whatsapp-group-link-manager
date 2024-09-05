function updateTable(links) {
  const table = document.getElementById("linkTable");
  // Clear existing rows except the header
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  links.forEach((link) => {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.textContent = link.groupName;
    cell2.textContent = link.link;
    cell3.textContent = new Date(link.timestamp).toLocaleString();
  });
}

function saveAsCSV() {
  chrome.runtime.sendMessage({ action: "getLinks" }, (links) => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Group Name,Link,Timestamp\n" +
      links.map((link) => `"${link.groupName}","${link.link}","${link.timestamp}"`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "whatsapp_groups.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function clearLinks() {
  if (confirm("Are you sure you want to clear all links? This action cannot be undone.")) {
    chrome.runtime.sendMessage({ action: "clearLinks" }, (response) => {
      if (response.status === "Links cleared") {
        updateTable([]);
      }
    });
  }
}

document.getElementById("saveCSV").addEventListener("click", saveAsCSV);

document.getElementById("openFullPage").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "openFullPage" });
});

document.getElementById("clearLinks").addEventListener("click", clearLinks);

chrome.runtime.sendMessage({ action: "getLinks" }, updateTable);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateLinks") {
    updateTable(request.links);
  }
});