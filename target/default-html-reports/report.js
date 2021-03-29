$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Sky/Articles.feature");
formatter.feature({
  "name": "Articles",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Get articles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get articles from the articles service",
  "keyword": "When "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iGetArticlesFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theResponseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple articles are returned from the articles service",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.multipleArticlesAreReturnedFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all articles have a unique id",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.allArticlesHaveAUniqueId()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get a single article",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I get article \"\u003cid\u003e\" from the articles service",
  "keyword": "When "
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the article id matches the \"\u003cid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the article details are returned from the articles service",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4656364867443"
      ]
    },
    {
      "cells": [
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get a single article",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get article \"1\" from the articles service",
  "keyword": "When "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iGetArticleFromTheArticlesService(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theResponseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article id matches the \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleIdMatchesThe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article details are returned from the articles service",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleDetailsAreReturnedFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get a single article",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get article \"2\" from the articles service",
  "keyword": "When "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iGetArticleFromTheArticlesService(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theResponseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article id matches the \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleIdMatchesThe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article details are returned from the articles service",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleDetailsAreReturnedFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get a single article",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get article \"3\" from the articles service",
  "keyword": "When "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iGetArticleFromTheArticlesService(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theResponseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article id matches the \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleIdMatchesThe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article details are returned from the articles service",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleDetailsAreReturnedFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get a single article",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get article \"4656364867443\" from the articles service",
  "keyword": "When "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iGetArticleFromTheArticlesService(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theResponseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article id matches the \"4656364867443\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleIdMatchesThe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article details are returned from the articles service",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleDetailsAreReturnedFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get a single article",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get article \"5\" from the articles service",
  "keyword": "When "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iGetArticleFromTheArticlesService(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theResponseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article id matches the \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleIdMatchesThe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the article details are returned from the articles service",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theArticleDetailsAreReturnedFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a new article",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get articles from the articles service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iGetArticlesFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have the total number of articles",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iHaveTheTotalNumberOfArticles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I create a new article",
  "keyword": "When "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iCreateANewArticle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code for the alternative request is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theResponseCodeForTheAlternativeRequestIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total number of articles has not changed",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theTotalNumberOfArticlesHasNotChanged()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete an article",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get articles from the articles service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iGetArticlesFromTheArticlesService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have the total number of articles",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iHaveTheTotalNumberOfArticles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete article \"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.iDeleteArticle(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code for the alternative request is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theResponseCodeForTheAlternativeRequestIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total number of articles has not changed",
  "keyword": "And "
});
formatter.match({
  "location": "com.sky.step_definitions.ArticlesStepDefinitions.theTotalNumberOfArticlesHasNotChanged()"
});
formatter.result({
  "status": "passed"
});
});