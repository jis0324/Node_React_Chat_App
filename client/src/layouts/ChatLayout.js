import React from 'react'

export default function chatLayout() {
    return (
        <div className="contentWrap">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    CHAT HISTORY
                </div>
                <div className="panel-footer">
                    <div className="input-group">
                        <input className="form-control" placeholder="Enter a message:" size="105" id="message"
                            ></input>
                        <span className="input-group-btn">
                            <input type="button" id="send" name="send" className="btn btn-info" value="SEND"></input>
                        </span>
                    </div>
                </div>
                <div className="panel-body">
                    <ul className="media-list">
                        <li className="media">
                            <div className="media-body">
                                <div id="chat">
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="notification"></div>
            </div>
        </div>
    )
}
