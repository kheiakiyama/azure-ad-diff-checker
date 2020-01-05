# azure-ad-diff-checker
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fkheiakiyama%2Fazure-ad-diff-checker%2Fmaster%2Fazuredeploy.json" target="_blank">
  <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2Fkheiakiyama%2Fazure-ad-diff-checker%2Fmaster%2Fazuredeploy.json" target="_blank">
  <img src="http://armviz.io/visualizebutton.png"/>
</a>

Check Azure AD users updated

## Set up
### Develop

Sync environment variables from function app

```
func azure functionapp fetch-app-settings {YourFunction}
```

### CI/CD
Refer from [this url](https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-how-to-github-actions)

### Azure Function
#### Environment Variables

|Key|Value|Note|
|-|-|-|
|AZURE_AD_META_BLOB_CONNECTION_STRING||Where does logic app put metadata of Azure AD|
|AZURE_AD_META_BLOB_PATH||Where does logic app put metadata of Azure AD|
