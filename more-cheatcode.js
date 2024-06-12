// freeweapon.js
const cheatString = "FREEWEAPON";

let cheatActivated = false;

function main() {
    while (true) {
        wait(0);

        if (checkCheatString()) {
            if (!cheatActivated) {
                giveWeaponsToPlayer();
                printStringWithLiteralStringNow("FREEWEAPON cheat activated!", 2000, 1);
                cheatActivated = true;
            }
        } else {
            cheatActivated = false;
        }
    }
}

function checkCheatString() {
    return getGameTextInput().toUpperCase() === cheatString;
}

function giveWeaponsToPlayer() {
    const player = PLAYER_PED;

    giveWeaponToChar(player, 22, 9999); // Colt 45
    giveWeaponToChar(player, 24, 9999); // Desert Eagle
    giveWeaponToChar(player, 29, 9999); // MP5
    giveWeaponToChar(player, 31, 9999); // M4
    giveWeaponToChar(player, 34, 9999); // Heat-Seeking Rocket Launcher
    giveWeaponToChar(player, 38, 9999); // Satchel Charge
}

main();
