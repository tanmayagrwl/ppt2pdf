# CLI PPT to PDF Converter For macOS

This is a JXA script for macOS that converts PowerPoint presentations (.ppt/.pptx files) to PDF format using KeyNote.

## Prerequisites

- macOS with KeyNote installed
- Terminal access

## Installation

1. Clone this repository:
    ```bash
    cd ~
    git clone https://github.com/tanmayagrwl/ppt2pdf.git
    cd ppt2pdf
    ```

2. Make the script executable:
    ```bash
    chmod +x ~/ppt2pdf/ppt2pdf
    ```

3. Move files to your local bin directory:
    ```bash
    sudo mv ppt2pdf /usr/local/bin/ppt2pdf
    sudo mv convertPPTXToPDF.js /usr/local/bin/convertPPTXToPDF.js
    ```

4. Clean up the repository folder:
    ```bash
    cd ~
    rm -rf ppt2pdf
    ```

5. If using a custom shell like fish, refresh your shell path:
    ```bash
    rehash  # Only needed for fish, zsh, etc.
    ```

## Usage

Convert a PowerPoint file to PDF with:

```bash
ppt2pdf <path-to-file>
```

### Example

```bash
ppt2pdf ~/Downloads/myslides.pptx
```

The converted PDF will be created in the same directory as the original file.
