# WhatsHarvest

## Description

WhatsHarvest is a powerful Chrome extension designed to simplify the collection and management of WhatsApp group invite links. It automatically detects, verifies, and organizes WhatsApp group links from any web page you visit, making it easier than ever to keep track of interesting groups.

## Features

1. Automatic Detection: Scans web pages for WhatsApp group invite links
2. Link Verification: Ensures all harvested links are valid
3. Smart Storage: Saves links with group names and timestamps
4. Duplicate Prevention: Avoids storing the same link twice
5. Quick Access Popup: Instantly view your collected links
6. Full Dashboard: Comprehensive link management interface
7. Export Functionality: Save your links as a CSV file
8. Clean Slate Option: Clear all stored links when needed

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the WhatsHarvest files.

## Usage

1. After installation, look for the WhatsHarvest icon in your Chrome toolbar.
2. Browse the web as usual. WhatsHarvest will automatically detect and store valid WhatsApp group links.
3. Click the WhatsHarvest icon to view your collected links in a popup.
4. For more options, use the "Open Full Page" button to access the comprehensive dashboard.
5. Export your harvested links to CSV using the "Save as CSV" button.
6. To start fresh, use the "Clear Links" button to remove all stored links.

## Files

- `manifest.json`: Extension configuration
- `background.js`: Background script for link processing and storage
- `content.js`: Content script for detecting links on web pages
- `popup.html` & `popup.js`: Popup interface
- `fullpage.html` & `fullpage.js`: Full-page dashboard interface

## Contributing

Got ideas to make WhatsHarvest even better? Contributions are welcome! Feel free to submit a Pull Request.

## License

WhatsHarvest is open source and available under the [MIT License](LICENSE).

## Contact

Jared Anchinga - [GitHub Profile](https://github.com/jaredanchinga)

Project Link: [https://github.com/jaredanchinga/whatsharvest](https://github.com/jaredanchinga/whatsharvest)
