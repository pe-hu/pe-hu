function creatIcons() {
    const canvasAll = document.querySelectorAll('canvas');
    for (let canvas of canvasAll) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            const x = (canvas.width / 2);
            const y = (canvas.height / 2);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${x * 0.55}px 'MS Mincho', 'SimSun', serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = '#000';
            ctx.fillText("∧°┐", x * 1.06, y, x * 2);
        };
    };
};

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        fetchText('README.md', 'footer');
    } else if (event.target.readyState === "complete") {
        creatIcons();
    };
});