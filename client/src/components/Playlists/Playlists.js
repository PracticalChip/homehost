import React from "react"
import { connect } from "react-redux";
import PlaylistItem from "./PlaylistItem/PlaylistItem"
import style from "./Playlists.module.css"

const Playlists = ({playlists}) => {
    return (
      <React.Fragment>
      
      <div className={style.Playlists}>
        <h1 className={style.Title}>Playlists</h1>

        <div className={style.Container}>
          {playlists && playlists.map(item => { return <PlaylistItem key={item.id} playlist={item}/> }) }
        </div>
      </div>
      </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return { playlists: state.playlists.playlists, };
};

export default connect(mapStateToProps)(Playlists);