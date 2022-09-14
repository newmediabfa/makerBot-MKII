module.exports = {
  name: 'help',
  description: 'Help!',
  execute(message, args) {
    message.member.send("Hello, friend! Here is a list of all available bot commands in the makerspace discord server:"
      + "\n\t🔸!ping"
      + "\n\t🔸!test"
      + "\n\t🔸!beep"
      + "\n\t🔹!server-setup [help || self-id]"
      + "\n\t🔹!start"
      + "\n\t🔹!end"
      + "\n\t🔸coming soon to a theater near YOU 👁👄👁"
       + "\n\n(commands with a blue bullet (🔹) may require special roles/permissions to use! If you have any questions, please contact a server admin.)");

     message.channel.send("Hey, " + message.author.username + ", psst! Check your DMs 😉");
  }
};
