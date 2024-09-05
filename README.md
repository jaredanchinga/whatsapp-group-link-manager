# WhatsApp Group Link Manager

## Description

WhatsApp Group Link Manager is a Chrome extension that helps you collect, verify, and manage WhatsApp group invite links. It automatically detects WhatsApp group links on web pages, verifies them, and stores them for easy access and management.

## Features

- Automatically detects and extracts WhatsApp group invite links from web pages
- Verifies the validity of extracted links
- Stores links with group names and timestamps
- Prevents duplicate links
- Provides a popup interface for quick access to stored links
- Offers a full-page dashboard for comprehensive link management
- Allows exporting links to CSV format
- Includes a feature to clear all stored links

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Once installed, you'll see the extension icon in your Chrome toolbar.
2. Browse websites containing WhatsApp group links. The extension will automatically detect and store valid links.
3. Click on the extension icon to view the popup with your collected links.
4. Use the "Open Full Page" button for a more detailed view and management options.
5. Export your links to CSV using the "Save as CSV" button.
6. Clear all stored links using the "Clear Links" button.

## Files

- `manifest.json`: Extension configuration
- `background.js`: Background script for link processing and storage
- `content.js`: Content script for detecting links on web pages
- `popup.html` & `popup.js`: Popup interface
- `fullpage.html` & `fullpage.js`: Full-page dashboard interface

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Jared Anchinga - [GitHub Profile](https://github.com/jaredanchinga)

Project Link: [https://github.com/jaredanchinga/whatsapp-group-link-manager](https://github.com/jaredanchinga/whatsapp-group-link-manager)
