import '../styles/download.scss';
import windowsIcon from '../assets/windows.svg';
import linuxIcon from '../assets/linux.svg';
import { memo } from 'react';

function Download() {
    return (
        <div className="download" id="download">
            <div className="square"></div>
            <div className="panel">
                <div className="content">
                    <div className="title">Download and install</div>
                    <div className="platforms">
                        <a
                            className="platform"
                            href="https://github.com/TatuLaras/cinema-spectrum"
                        >
                            <img src={windowsIcon} alt="" />
                            <div className="name">Windows</div>
                        </a>
                        <a
                            className="platform"
                            href="https://github.com/TatuLaras/cinema-spectrum"
                        >
                            <img src={linuxIcon} alt="" />
                            <div className="name">Linux</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Download);
