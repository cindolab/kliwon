import logo from '../assets/logo.svg'

export default function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className="container">
                <div className="logo-wrapper">
                    <img src={logo} alt="Kliwon Logo" className="logo-icon" />
                    <span className="logo-text">KLIWON</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Tentang</a></li>
                        <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollToSection('ecosystem'); }}>Ekosistem</a></li>
                        <li><a href="#tokenomics" onClick={(e) => { e.preventDefault(); scrollToSection('tokenomics'); }}>Tokenomics</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Kontak</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
