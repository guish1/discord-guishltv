import EventEmitter from 'events';

module.exports.Client = class Client extends EventEmitter {
  constructor() {
    super();
    this.user = {
      setActivity() {},
    };
  }

  login() {}
};

module.exports.MessageEmbed = class MessageEmbed {
  setColor(color) {
    this.color = color;
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setAuthor(name, iconURL, url) {
    this.author = {
      name,
      iconURL,
      url,
    };

    return this;
  }

  setFooter(text, iconURL) {
    this.footer = {
      text,
      iconURL,
    };

    return this;
  }

  setTimestamp(timestamp = Date.now()) {
    this.timestamp = timestamp;
    return this;
  }

  addField(name, value, inline) {
    this.fields = this.fields || [];

    this.fields.push({
      name,
      value,
      inline,
    });

    return this;
  }

  addBlankField(inline) {
    return this.addField('', '', inline);
  }
};
