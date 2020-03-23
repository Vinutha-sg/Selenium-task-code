$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenario1.feature");
formatter.feature({
  "line": 1,
  "name": "To Automate the given website",
  "description": "",
  "id": "to-automate-the-given-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "shop the paticular item from esite",
  "description": "",
  "id": "to-automate-the-given-website;shop-the-paticular-item-from-esite",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "navigate to the E-site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "go to women category and apply filters",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "add a product to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" to login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "read the message from payment",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "quit the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "to-automate-the-given-website;shop-the-paticular-item-from-esite;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 14,
      "id": "to-automate-the-given-website;shop-the-paticular-item-from-esite;;1"
    },
    {
      "cells": [
        "gvinutha12@gmail.com",
        "yellow"
      ],
      "line": 15,
      "id": "to-automate-the-given-website;shop-the-paticular-item-from-esite;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "shop the paticular item from esite",
  "description": "",
  "id": "to-automate-the-given-website;shop-the-paticular-item-from-esite;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "navigate to the E-site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "go to women category and apply filters",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "add a product to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter \"gvinutha12@gmail.com\" and \"yellow\" to login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "read the message from payment",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "quit the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstAsgnmnt.navigate()"
});
formatter.result({
  "duration": 11964710320,
  "status": "passed"
});
formatter.match({
  "location": "FirstAsgnmnt.selection()"
});
formatter.result({
  "duration": 6422848536,
  "status": "passed"
});
formatter.match({
  "location": "FirstAsgnmnt.add_cart()"
});
formatter.result({
  "duration": 3309102106,
  "status": "passed"
});
formatter.match({
  "location": "FirstAsgnmnt.checkout()"
});
formatter.result({
  "duration": 7931848005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gvinutha12@gmail.com",
      "offset": 7
    },
    {
      "val": "yellow",
      "offset": 34
    }
  ],
  "location": "FirstAsgnmnt.login(String,String)"
});
formatter.result({
  "duration": 6171732230,
  "status": "passed"
});
formatter.match({
  "location": "FirstAsgnmnt.payment()"
});
formatter.result({
  "duration": 7506253929,
  "status": "passed"
});
formatter.match({
  "location": "FirstAsgnmnt.quit()"
});
formatter.result({
  "duration": 708403148,
  "status": "passed"
});
});