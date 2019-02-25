export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.far = parseFloat((this.kelvin * (9 / 5) - 459.67).toFixed(1))
  }

  getWeather() {
    return `
    <div id="weather-card" class="card border-info mb-1" style="max-width: 10cw;">
      <div class="card-header pb-0"><h6>${this.city}</h6></div>
      <div class="card-body text-info">
      <h3 class="card-title">${this.far}°F</h3>
      </div>
    </div>
    `
  }

}