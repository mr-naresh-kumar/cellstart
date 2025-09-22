
        
        // class CellVisualizer {
        //     constructor(canvas) {
        //         this.canvas = canvas;
        //         this.ctx = canvas.getContext('2d');
        //         this.resize();
        //         this.cells = [];
        //         this.time = 0;
        //         this.init();
        //     }
            
        //     resize() {
        //         this.canvas.width = this.canvas.offsetWidth;
        //         this.canvas.height = this.canvas.offsetHeight;
        //     }
            
        //     init() {
        //         // Create initial cells
        //         for (let i = 0; i < 50; i++) {
        //             this.cells.push({
        //                 x: Math.random() * this.canvas.width,
        //                 y: Math.random() * this.canvas.height,
        //                 radius: Math.random() * 3 + 1,
        //                 vx: (Math.random() - 0.5) * 2,
        //                 vy: (Math.random() - 0.5) * 2,
        //                 hue: Math.random() * 360,
        //                 connections: []
        //             });
        //         }
        //         this.animate();
        //     }
            
        //     animate() {
        //         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                
        //         // Draw background gradient
        //         const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        //         gradient.addColorStop(0, '#e3f2fd');
        //         gradient.addColorStop(1, '#f3e5f5');
        //         this.ctx.fillStyle = gradient;
        //         this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                
        //         this.time += 0.02;
                
        //         // Update and draw cells
        //         this.cells.forEach((cell, index) => {
        //             // Update position
        //             cell.x += cell.vx;
        //             cell.y += cell.vy;
                    
        //             // Bounce off walls
        //             if (cell.x <= cell.radius || cell.x >= this.canvas.width - cell.radius) {
        //                 cell.vx *= -1;
        //             }
        //             if (cell.y <= cell.radius || cell.y >= this.canvas.height - cell.radius) {
        //                 cell.vy *= -1;
        //             }
                    
        //             // Draw cell
        //             this.ctx.beginPath();
        //             this.ctx.arc(cell.x, cell.y, cell.radius, 0, Math.PI * 2);
                    
        //             // Color based on proximity to other cells
        //             const nearbyCells = this.cells.filter((other, i) => 
        //                 i !== index && this.distance(cell, other) < 80
        //             );
                    
        //             const intensity = Math.min(nearbyCells.length * 20, 100);
        //             const saturation = 50 + intensity;
        //             const lightness = 70 - intensity * 0.3;
                    
        //             this.ctx.fillStyle = `hsl(${cell.hue}, ${saturation}%, ${lightness}%)`;
        //             this.ctx.fill();
        //             this.ctx.strokeStyle = `hsl(${cell.hue}, 70%, 50%)`;
        //             this.ctx.lineWidth = 1;
        //             this.ctx.stroke();
                    
        //             // Store for connections
        //             cell.connections = nearbyCells;
        //         });
                
        //         // Draw connections
        //         this.ctx.strokeStyle = 'rgba(44, 90, 160, 0.1)';
        //         this.ctx.lineWidth = 1;
                
        //         for (let i = 0; i < this.cells.length; i++) {
        //             for (let j = i + 1; j < this.cells.length; j++) {
        //                 const dist = this.distance(this.cells[i], this.cells[j]);
        //                 if (dist < 80) {
        //                     this.ctx.beginPath();
        //                     this.ctx.moveTo(this.cells[i].x, this.cells[i].y);
        //                     this.ctx.lineTo(this.cells[j].x, this.cells[j].y);
        //                     this.ctx.stroke();
        //                 }
        //             }
        //         }
                
        //         // Pulsing effect
        //         this.cells.forEach(cell => {
        //             const pulse = Math.sin(this.time * 3 + cell.x * 0.01) * 0.5 + 0.5;
        //             cell.radius = (Math.random() * 3 + 1) * (1 + pulse * 0.3);
        //         });
                
        //         requestAnimationFrame(() => this.animate());
        //     }
            
        //     distance(cell1, cell2) {
        //         const dx = cell1.x - cell2.x;
        //         const dy = cell1.y - cell2.y;
        //         return Math.sqrt(dx * dx + dy * dy);
        //     }
        // }
        
        // // Initialize canvas when DOM is loaded
        // document.addEventListener('DOMContentLoaded', () => {
        //     const canvas = document.getElementById('cellCanvas');
        //     if (canvas) {
        //         new CellVisualizer(canvas);
        //     }
            
        //     // Smooth scrolling for navigation links
        //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //         anchor.addEventListener('click', function (e) {
        //             e.preventDefault();
        //             const target = document.querySelector(this.getAttribute('href'));
        //             if (target) {
        //                 target.scrollIntoView({
        //                     behavior: 'smooth',
        //                     block: 'start'
        //                 });
        //             }
        //         });
        //     });
            
        //     // Header scroll effect
        //     window.addEventListener('scroll', () => {
        //         const header = document.querySelector('header');
        //         if (window.scrollY > 100) {
        //             header.style.background = 'rgba(255, 255, 255, 0.98)';
        //             header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        //         } else {
        //             header.style.background = 'rgba(255, 255, 255, 0.95)';
        //             header.style.boxShadow = 'none';
        //         }
        //     });
            
        //     // Animate stats on scroll
        //     const observerOptions = {
        //         threshold: 0.5,
        //         rootMargin: '0px 0px -50px 0px'
        //     };
            
        //     const observer = new IntersectionObserver((entries) => {
        //         entries.forEach(entry => {
        //             if (entry.isIntersecting) {
        //                 const stats = entry.target.querySelectorAll('.stat-item h3');
        //                 stats.forEach(stat => {
        //                     const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        //                     let current = 0;
        //                     const increment = target / 100;
        //                     const timer = setInterval(() => {
        //                         current += increment;
        //                         if (current >= target) {
        //                             stat.textContent = target.toLocaleString() + '+';
        //                             clearInterval(timer);
        //                         } else {
        //                             stat.textContent = Math.floor(current).toLocaleString() + '+';
        //                         }
        //                     }, 20);
        //                 });
        //                 observer.unobserve(entry.target);
        //             }
        //         });
        //     }, observerOptions);
            
        //     const statsSection = document.querySelector('.stats-section');
        //     if (statsSection) {
        //         observer.observe(statsSection);
        //     }
        // });
        
        // // Handle window resize for canvas
        // window.addEventListener('resize', () => {
        //     const canvas = document.getElementById('cellCanvas');
        //     if (canvas) {
        //         const visualizer = canvas.visualizer;
        //         if (visualizer) {
        //             visualizer.resize();
        //         }
        //     }
        // });


        class SimpleCellVisualizer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cells = [];
        this.init();
        this.animate();
    }

    init() {
        // Create 30 random cells
        for (let i = 0; i < 30; i++) {
            this.cells.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 5 + 5,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                color: `hsl(${Math.random() * 360}, 70%, 60%)`
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.cells.forEach(cell => {
            // Move cell
            cell.x += cell.vx;
            cell.y += cell.vy;

            // Bounce off edges
            if (cell.x < cell.radius || cell.x > this.canvas.width - cell.radius) cell.vx *= -1;
            if (cell.y < cell.radius || cell.y > this.canvas.height - cell.radius) cell.vy *= -1;

            // Draw cell
            this.ctx.beginPath();
            this.ctx.arc(cell.x, cell.y, cell.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = cell.color;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Run when page loads
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('cellCanvas');
    if (canvas) {
        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        new SimpleCellVisualizer(canvas);
    }
});