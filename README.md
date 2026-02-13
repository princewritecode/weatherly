# ☀️ Weatherly - Your Weather Companion

<div align="center">

![Weather App](https://img.shields.io/badge/Weather-App-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A beautiful, modern weather application that provides real-time weather information for any city in the world.**

[Live Demo](#) • [Report Bug](https://github.com/princewritecode/weatherly/issues) • [Request Feature](https://github.com/princewritecode/weatherly/issues)

</div>

---

## 📸 Preview

Experience a sleek and intuitive interface with smooth animations and real-time weather data at your fingertips.

## ✨ Features

- 🌍 **Global Weather Data** - Search weather for any city worldwide
- 🌡️ **Real-time Information** - Get current temperature, feels-like temperature, and weather conditions
- 💨 **Detailed Metrics** - View humidity, wind speed, pressure, and visibility
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** - Quick loading with minimal dependencies
- 🎭 **Dynamic Weather Icons** - Emoji-based weather representation
- ⌨️ **Keyboard Support** - Press Enter to search

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- OpenWeatherMap API key (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/princewritecode/weatherly.git
   ```

2. **Navigate to project directory**
   ```bash
   cd weatherly
   ```

3. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

4. **Add your API key**
   - Open `weatherproject.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

5. **Launch the app**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## 🎯 Usage

1. **Search for a city**
   - Type any city name in the search box
   - Click the "Search" button or press Enter

2. **View weather details**
   - Current temperature in Celsius
   - Weather description
   - Feels-like temperature
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure
   - Visibility distance

## 🛠️ Built With

- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
  - Flexbox & Grid layouts
  - CSS animations and transitions
  - Responsive design with media queries
- **JavaScript (ES6+)** - Logic and API integration
  - Fetch API for HTTP requests
  - Async/Await for asynchronous operations
  - DOM manipulation
- **OpenWeatherMap API** - Weather data provider
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
weatherly/
│
├── index.html              # Main HTML file
├── style.css               # Stylesheet with animations
├── weatherproject.js       # JavaScript logic and API calls
└── README.md              # Project documentation
```

## 🎨 Color Palette

- **Primary Gradient**: `#667eea` → `#764ba2`
- **Background**: Purple gradient
- **Cards**: White with transparency
- **Text**: Dark gray `#333`
- **Accent**: Purple `#667eea`

## 🌟 Key Features Explained

### Responsive Design
The app adapts seamlessly to different screen sizes:
- Desktop: Full-width layout with grid
- Tablet: Adjusted spacing and font sizes
- Mobile: Single-column layout

### Weather Icons
Dynamic emoji icons based on weather conditions:
- ☀️ Clear sky
- ☁️ Cloudy
- 🌧️ Rain
- ⛈️ Thunderstorm
- ❄️ Snow
- 🌫️ Fog/Mist

### Smooth Animations
- Fade-in on page load
- Floating weather icon
- Rotating sun logo
- Hover effects on cards
- Button interactions

## 🔧 Configuration

### API Settings
```javascript
const API_KEY = 'your_api_key';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
```

### Temperature Units
Currently set to metric (Celsius). To change to Fahrenheit:
```javascript
// Change units=metric to units=imperial
fetch(`${API_URL}?q=${city}&units=imperial&appid=${API_KEY}`)
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Hourly weather updates
- [ ] Geolocation support
- [ ] Weather maps
- [ ] Multiple city comparison
- [ ] Dark/Light theme toggle
- [ ] Save favorite cities
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Air quality index

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prince Patel**

- GitHub: [@princewritecode](https://github.com/princewritecode)
- Project Link: [https://github.com/princewritecode/weatherly](https://github.com/princewritecode/weatherly)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Google Fonts](https://fonts.google.com/) for the Poppins font
- Inspiration from modern weather apps
- The open-source community

## 📞 Support

If you like this project, please ⭐ star this repository and share it with others!

For support, email your-email@example.com or open an issue on GitHub.

---

<div align="center">

**Made with ❤️ by Prince Patel**

⭐ Star this repo if you find it helpful!

</div>
