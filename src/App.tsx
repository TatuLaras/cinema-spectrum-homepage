import './styles/screen.scss';
import Info from './features/info/components/Info';
import Download from './features/download/components/Download';

export default function App() {
    return (
        <>
            <div className="screen" role="banner">
                <div className="noise-layer"></div>
                <div className="bg">
                    <div className="bottom-layer"></div>
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <div className="blob small blob-3"></div>
                </div>
                <h1 className="main-title">
                    CINEMA
                    <br />
                    SPECTRUM
                </h1>
            </div>
            <Info />
            <Download />
        </>
    );
}
