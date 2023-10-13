import React from 'react';
import './Tutorials.css';

function Tutorials() {
    return (
        <div>
            <div className="featured-tutorials">Featured Tutorials</div>
            <div className="tutorial-list">
                <div className="tutorial1">
                    <a href="#"><img src="https://picsum.photos/1000/300" alt="Thumbnail" /></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">Learn JavaScript</div>
                        <div className="tutorial-description">JavaScript is the world's most popular programming language.</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 5 </span>Author's Name: Rakesh Sharma
                        </div>
                    </div>
                </div>
                <div className="tutorial2">
                    <a href="#"><img src="https://picsum.photos/1100/300" alt="Thumbnail" /></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">Learn ReactJS</div>
                        <div className="tutorial-description">React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 5 </span>Author's Name: Rakesh Sharma
                        </div>
                    </div>
                </div>
                <div className="tutorial3">
                    <a href="#"><img src="https://picsum.photos/800/300" alt="Thumbnail" /></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">Learn NEXTJS</div>
                        <div className="tutorial-description">Next.js is a React framework that gives you building blocks to create web applications.</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 5 </span>Author's Name: Rakesh Sharma
                        </div>
                    </div>
                </div>
            </div>
            <div className="see-all-tutorials">
                <a href="#">See all tutorials</a>
            </div>
        </div>
    );
}

export default Tutorials;
