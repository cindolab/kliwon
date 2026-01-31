# PolygonScan API Configuration

## Get Your Free API Key

1. Visit https://polygonscan.com/apis
2. Sign up for a free account
3. Generate an API key
4. Replace 'YourApiKeyToken' in app.js with your actual API key

## API Endpoint Used

```
https://api.polygonscan.com/api
?module=token
&action=tokenholderlist
&contractaddress=0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8
&page=1
&offset=100
&apikey=YOUR_API_KEY
```

## Rate Limits

Free tier: 5 calls/second, 100,000 calls/day

## Features

- ✅ Fetches real holder data from blockchain
- ✅ Automatic fallback to mock data if API fails
- ✅ Displays top 100 holders
- ✅ Shows accurate balance and percentage
- ✅ Updates on page load

## Note

Without a valid API key, the dashboard will use mock data as fallback.
The dashboard will still function normally with simulated holder data.
