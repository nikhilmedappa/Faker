
var Music = function (faker) {
  
//var self = this;
   // var f = faker.fake;
    
    
    /**
     * musicGenre
     *
     * @method faker.music.getGenre
     */
    this.getGenre = function () {
        return faker.random.arrayElement(faker.definitions.music.genre);
    };


    /**
     * musicBPM
     *
     * @method faker.music.getBpm
     */
    this.getBpm = function () {
        return faker.random.arrayElement(faker.definitions.music.bpm);
    };


    /**
     * musicBPM
     *
     * @method faker.music.getArtistname
     */
    this.getArtistname = function () {
        return faker.random.arrayElement(faker.definitions.music.artistname);
    };

    /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.people
   */
  this.getArtistimage = function (width, height, randomize) {
    return faker.image.lorempixel.imageUrl(110, 110, 'people', randomize);
  };

};

module['exports'] = Music;
