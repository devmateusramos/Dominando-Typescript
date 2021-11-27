"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a item as ${item}`);
}
function logInfo(uid, user) {
    console.log(`An user with ${uid} has a name as ${user}`);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('Ios');
logInfo(23, 'Mateus');
