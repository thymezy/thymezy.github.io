const schemaString = `{
  "definitions": {
    "Card": {
      "type": "card"
    }
  },
  "layout": {
    "type": "split",
    "direction": "horizontal",
    "areas": [
      {
        "name": "leftPane",
        "minWidth": "150px",
        "resizable": true,
        "scroll": { "direction": "horizontal", "enabled": true },
        "columns": [
          { "name": "authors", "minWidth": "300px", "initialWidth": "300px" },
          { "name": "assets", "minWidth": "200px", "initialWidth": "200px", "visible": "partial" }
        ]
      },
      { "name": "mainPane", "flex": 1 }
    ]
  },
  "dataSources": {
    "indexPayload": { "endpoint": "/prod/index", "method": "GET" },
    "authors": { "expression": "{{ Object.keys(indexPayload) }}" },
    "authorMeta": { "expression": "{{ indexPayload }}" },
    "assetsForSelected": {
      "expression": "{{ selectedAuthors.flatMap(a => Object.keys(authorMeta[a].assets || {})) }}"
    },
    "authorContent": {
      "endpoint": "/api/authors/content",
      "params": {
        "authorIds": "{{ selectedAuthors }}",
        "assets": "{{ selectedAssets }}",
        "analysisTypes": "{{ selectedAnalysisTypes }}"
      }
    }
  },
  "components": [
    {
      "area": "leftPane",
      "type": "carousel",
      "direction": "horizontal",
      "scrollable": true,
      "autoScroll": false,
      "components": [
        {
          "type": "container",
          "header": "Authors",
          "components": [
            {
              "id": "authorList",
              "type": "list",
              "orientation": "vertical",
              "selection": { "mode": "multiple", "bind": "selectedAuthors", "highlight": true },
              "item": {
                "type": "Card",
                "highlightOnSelect": true,
                "fields": [
                  { "model": "name", "role": "title" },
                  { "model": "language", "enum": ["chinese", "english"] },
                  { "model": "style", "enum": ["technical_analysis"] },
                  { "model": "ref_type", "enum": ["youtube", "medium"] }
                ],
                "actions": [
                  {
                    "icon": "settings",
                    "trigger": "click",
                    "action": "openModal",
                    "modal": {
                      "title": "Configure Time Horizons",
                      "fields": [
                        {
                          "model": "long_term",
                          "type": "slider",
                          "range": { "min": 1, "max": 120 },
                          "showValue": true,
                          "unitField": "long_term_unit",
                          "unitEnum": ["day", "week", "month", "quarter", "year"],
                          "defaultUnit": "month"
                        },
                        {
                          "model": "mid_term",
                          "type": "slider",
                          "range": { "min": 1, "max": 60 },
                          "showValue": true,
                          "unitField": "mid_term_unit",
                          "unitEnum": ["day", "week", "month", "quarter", "year"],
                          "defaultUnit": "month"
                        },
                        {
                          "model": "short_term",
                          "type": "slider",
                          "range": { "min": 1, "max": 30 },
                          "showValue": true,
                          "unitField": "short_term_unit",
                          "unitEnum": ["day", "week", "month", "quarter", "year"],
                          "defaultUnit": "day"
                        },
                        {
                          "model": "ultra_short_term",
                          "type": "slider",
                          "range": { "min": 1, "max": 7 },
                          "showValue": true,
                          "unitField": "ultra_short_term_unit",
                          "unitEnum": ["day", "week", "month", "quarter", "year"],
                          "defaultUnit": "day"
                        }
                      ],
                      "actions": [
                        { "text": "Save", "action": "saveAuthorConfig" },
                        { "text": "Cancel", "action": "closeModal" }
                      ]
                    }
                  }
                ]
              },
              "dataSource": "authors"
            }
          ]
        },
        {
          "type": "container",
          "header": "Assets",
          "components": [
            {
              "id": "assetList",
              "type": "list",
              "orientation": "vertical",
              "selection": { "mode": "multiple", "bind": "selectedAssets" },
              "item": {
                "type": "Card",
                "style": "compact",
                "model": "value"
              },
              "dataSource": "assetsForSelected"
            }
          ]
        }
      ]
    },
    {
      "area": "leftPane",
      "type": "button",
      "position": "bottom",
      "text": "Proceed ({{selectedAuthors.length}})",
      "disabled": "{{selectedAuthors.length === 0}}",
      "action": {
        "type": "httpRequest",
        "endpoint": "/prod/query",
        "method": "POST",
        "body": {
          "authorIds": "{{ selectedAuthors }}",
          "assets": "{{ selectedAssets }}",
          "analysisTypes": "{{ selectedAnalysisTypes }}"
        }
      }
    },
    {
      "area": "mainPane",
      "type": "layout",
      "layout": { "type": "stack", "direction": "vertical" },
      "components": [
        {
          "id": "analysisTypeSelector",
          "type": "multiSelect",
          "header": "Show Analysis Types",
          "selection": { "bind": "selectedAnalysisTypes" },
          "options": [
            "key_levels",
            "indicators",
            "volume_analysis",
            "market_sentiment",
            "risk_warnings",
            "correlation_analysis",
            "strategy_suggestions"
          ]
        },
        {
          "type": "dynamicContent",
          "dataSource": "authorContent",
          "visible": "{{selectedAuthors.length > 0}}",
          "filter": {
            "analysisTypes": "{{selectedAnalysisTypes}}",
            "assets": "{{selectedAssets}}"
          }
        }
      ]
    }
  ]
}
`;

export const getUISchema = () => {
  try {
    return JSON.parse(schemaString);
  } catch (error) {
    console.error('Error parsing UI schema:', error);
    return null;
  }
};