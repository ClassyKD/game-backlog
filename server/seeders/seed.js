const db = require('../config/connection');
const { User, Game } = require('../models');
const userSeeds = require('./userSeeds.json');
const videoSeeds = require('./videoSeeds.json');

db.once('open', async () => {
  try {
    await Game.deleteMany({});
    await User.deleteMany({});

    const userData = await User.create(userSeeds);

    for (let i = 0; i < videoSeeds.length; i++) {
      const { _id } = await Game.create(videoSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: userData[Math.floor(Math.random()*userData.length)].username },
        {
          $addToSet: {
            games: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
