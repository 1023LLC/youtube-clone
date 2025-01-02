import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';


const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best YouTube Channel To Learn Web Development</h3>
        <div className="play-video-info">
            <p>1023 Views &bull; 23 days ago</p>
            <div className="">
                <span><img src={like} alt={like} /> 711</span>
                <span><img src={dislike} alt={dislike} /> 2</span>
                <span><img src={share} alt={share} /> Share</span>
                <span><img src={save} alt={save} /> Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt={jack} />
            <div className="">
                <p>1023xc</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes learning Easy</p>
            <p>Subscribe to 1023xc to Watch More Content on Web Development</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt={user_profile} />
                <div className="">
                    <h3>Jack Nolan <span>1 day ago</span></h3>
                    <p>A great channel to learn about everything programming. The tutorials are spot-on and very easy to understand.</p>
                    <div className="comment-action">
                        <img src={like} alt="like" />
                        <span>247</span>
                        <img src={dislike} alt="dislike" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt={user_profile} />
                <div className="">
                    <h3>Jack Nolan <span>1 day ago</span></h3>
                    <p>A great channel to learn about everything programming. The tutorials are spot-on and very easy to understand.</p>
                    <div className="comment-action">
                        <img src={like} alt="like" />
                        <span>247</span>
                        <img src={dislike} alt="dislike" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt={user_profile} />
                <div className="">
                    <h3>Jack Nolan <span>1 day ago</span></h3>
                    <p>A great channel to learn about everything programming. The tutorials are spot-on and very easy to understand.</p>
                    <div className="comment-action">
                        <img src={like} alt="like" />
                        <span>247</span>
                        <img src={dislike} alt="dislike" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt={user_profile} />
                <div className="">
                    <h3>Jack Nolan <span>1 day ago</span></h3>
                    <p>A great channel to learn about everything programming. The tutorials are spot-on and very easy to understand.</p>
                    <div className="comment-action">
                        <img src={like} alt="like" />
                        <span>247</span>
                        <img src={dislike} alt="dislike" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo