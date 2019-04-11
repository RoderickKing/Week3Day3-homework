const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map(journeys => journeys.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map(journeys => journeys.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
    return this.journeys.filter(journeys => journeys.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    return this.journeys.filter(journeys => journeys.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce(function(total,distance){
    return total += distance.distance ;
  }, 0)
};

Traveller.prototype.getJourneyMethods = function() {
    return this.journeys.map(journeys => journeys.transport);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let myArray = this.getJourneyMethods();
  return Array.from(new Set(myArray));
};


module.exports = Traveller;
