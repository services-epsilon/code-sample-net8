# .NET 10.0 Upgrade Plan

## Execution Steps

Execute steps below sequentially one by one in the order they are listed.

1. Validate that a .NET 10.0 SDK required for this upgrade is installed on the machine and if not, help to get it installed.
2. Ensure that the SDK version specified in global.json files is compatible with the .NET 10.0 upgrade.
3. Upgrade ConsoleApp\ConsoleApp-Partie1.csproj

## Settings

This section contains settings and data used by execution steps.

### Excluded projects

No projects are excluded from the upgrade.

### Project upgrade details

This section contains details about each project upgrade and modifications that need to be done in the project.

#### ConsoleApp-Partie1.csproj modifications

Project properties changes:
  - Target framework should be changed from `net9.0` to `net10.0`
