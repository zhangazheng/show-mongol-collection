// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by show-mongol-collections.js.
import { name as packageName } from "meteor/zhangzheng:show-mongol-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('show-mongol-collection - example', function (test) {
  test.equal(packageName, "show-mongol-collection");
});
