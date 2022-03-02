$(function () {
  console.log("ready!");

  // loads data into DevSkills card
  $.each(skillData, function (key, item) {
    $("#stuff-lists").append(`<h4> ${key} </h4> <dl id="${key}-list">`);
    $.each(item, function (index, val) {
      // $(`#${key}-list`).append(val.propertyName);
        $.each(val, function (propertyName, propertyValue) {
        console.log(propertyName, propertyValue);
        //$(`#${key}-list`).append(`<li>`);
          $(`#${key}-list`).append(`${propertyValue}`);
        //${val.showName} / ${val.venu/e}`);
      });
    });
  });

  // loads data into interest/hobbies card
  $.each(interestData, function (key, item) {
    $("#stuff-lists").append(`<h4> ${key} </h4> <dl id="${key}-list">`);
    $.each(item, function (index, val) {
      // $(`#${key}-list`).append(val.propertyName);
        $.each(val, function (propertyName, propertyValue) {
        console.log(propertyName, propertyValue);
        //$(`#${key}-list`).append(`<li>`);
          $(`#${key}-list`).append(`${propertyValue}`);
        //${val.showName} / ${val.venu/e}`);
      });
    });
  });

});


const skillData = {
  skills: [
    { skillName: `<dt>Python</dt>`, description: `<dd>2 intro classes</dd>` },
    { skillName: `<dt>HTML`, description: `<dd>~1.5 years experience, few webpages<dd>` },
    { skillName: `<dt>jQuery`, description: `<dd>< than a semester of class` },
    { skillName: `<dt>CSS`, description:`<dd> < than a semester`},
  ],
};

const interestData = {
  interests: [
    { interestName: `<dt>Music (artists)</dt>`, description: `<dd>Scarface, Bob Dylan, Queen, Freddie Dredd, Michael Jackson, CCR, Queens of the Stone Age</dd>` },
    { interestName: `<dt>Videogames (Titles/Series)`, description: `<dd>Most any FromSoft game, Elder Scrolls, Fallout, TF2, Garry's Mod, Pokemon, Payday 2, Halo, Metroid,
     Hobo: Tough Life, Besiege, CoD (not many after Black Ops), Doom (Old & New), Tons of Indie titles (FTL, Insryption, Pixel Piracy, etc.)<dd>` },
    { interestName: `<dt>Shows/YT Series`, description: `<dd>Dead Meat's "Kill Counts", Jacob Geller and Ryan Hollinger's video essays (Horror Dissections), Netflix's "Don't f***k with cats" 
    & "Love, Death and Robots", Qxir's "Tales from the Bottle"` },
    { interestName: `<dt>Comics/Manga`, description:`<dd> AVP, Berserk, anything Junji Ito`},
  ],
};
