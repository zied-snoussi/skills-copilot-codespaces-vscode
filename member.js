function skillsMember() {
    // Get the member's skills
    var memberSkills = member.skills;
    // Loop through the member's skills
    for (var i = 0; i < memberSkills.length; i++) {
        // Get the skill's name
        var skillName = memberSkills[i].name;
        // Get the skill's level
        var skillLevel = memberSkills[i].level;
        // Print the skill's name and level
        console.log(skillName + " " + skillLevel);
    }
}