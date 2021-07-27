const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f2833;
}
.banner-bar {
    background-color: #0b0c10;
    width: 100%;
    color: #66fcf1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
h1 {
    font-family: Bebas Neue;
    font-size: 8vw;
}
p {
    font-family: 'Roboto Condensed', sans-serif;
    position: relative;
    left: 12px;
}
h2 {
    font-family: 'Roboto Condensed', sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
}
a {
    color: #1f2833;
}
.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: #c5c6c7;
    box-shadow: 2px 5px 5px black;
    border-radius: 5px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: #0b0c10;
    border: 2px solid #0b0c10;
    width: 246px;
    border-top-left-radius: 10px;
    color:#66fcf1
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`;

module.exports = style;