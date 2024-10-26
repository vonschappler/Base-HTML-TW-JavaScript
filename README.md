# Base-HTML-TW-JavaScript

When using this project as reference for your designs, it's important to run the commands:

```powershell
# installing the necessary packages
npm install

# watching changes on the tailwind.css file
npx tailwindcss -i ./resources/tailwind.css -o ./resources/index.css --watch
```

on your terminal, so the changes on the file `./resources/tailwind.css` will be reflected to the project.

> [!important]
> Do not change the existing code inside the file `./resources/index.css`, because this is the file generated from your TailwindCss classes. Any styling has to be created on `./resources/tailwind.css`!
