var guding = JSON.parse($response.body);
guding.item.isPro = true;
guding.item.isPlus = true;
guding.item.hasSwipefy = true;
guding.item.displayName = "Shannon";
guding.item.customId = "https:\/\/t\.me\/Guding88";
guding.item.profile.bio = "SelfUse!";
guding.item.profile.theme = "blue";
guding.item.image = "https:\/\/cdn.stats.fm\/file\/statsfm\/images\/users\/31tkfv4thwwc5czcbq24uyyjbtzq\/83be2cc47a458ffb84f0ad8a1ba3bba4.webp";
$done({ body: JSON.stringify(guding) });
