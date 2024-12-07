The intermittent nature of the error suggests a caching issue with npm.  A potential solution is to clear the npm cache and reinstall dependencies.

```bash
npm cache clean --force
npm install
expo prebuild
expo build:ios // or expo build:android
```

Alternatively, consider using yarn as a package manager. Yarn often provides more detailed error messages and more consistent build results. You can switch to yarn using:

```bash
yarn install
yarn expo prebuild
expo build:ios // or expo build:android
```

If the issue persists, ensure that your project's dependencies are correctly declared in `package.json`. Ensure all network connectivity is stable during the build process.  If possible, provide the complete error logs for further debugging assistance.