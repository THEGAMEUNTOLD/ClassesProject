import React from "react";
import "./Spotify.scss";
import MacWindow from "./MacWindow";

const Spotify = () => {
    return (
        <MacWindow className="Spotify-Window" title="Spotify — Now Playing">
            <div className="Spotify-header">
                <h2>🎧 Spotify Playlist</h2>
                <p>Chill • Focus • Code</p>
            </div>
            <div className="Spotify-player">
                <iframe
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Player"
                />
            </div>
        </MacWindow>
    );
};

export default Spotify;
