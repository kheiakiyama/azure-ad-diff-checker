# azure-ad-diff-checker
Check Azure AD users updated

## Set up
### CI/CD
Refer from [this url](https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-how-to-github-actions)

### Azure Function
#### Environment Variables

|Key|Value|Note|
|-|-|-|
|AZURE_AD_META_BLOB_CONNECTION_STRING||Where does logic app put metadata of Azure AD|
|AZURE_AD_META_BLOB_PATH||Where does logic app put metadata of Azure AD|
