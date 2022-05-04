import * as React from 'react';
import nft1 from '../assets/img/1.png'
import nft2 from '../assets/img/2.png'
import nft3 from '../assets/img/3.png'
import nft4 from '../assets/img/4.png'
import nft5 from '../assets/img/5.png'
import nft6 from '../assets/img/6.png'
import fPoint from '../assets/img/fPoint.png'
import sPoint from '../assets/img/sPoint.png'
import bHeart from '../assets/img/bHeart.png'
import rHeart from '../assets/img/rHeart.png'
import winner from '../assets/img/winner.png'
import wallet from '../assets/img/wallet.png'
import 'animate.css';

import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom';

import idl from "../assets/raffle.json"
const { Meta } = Card;

export default function Raffle() {

    const navigate = useNavigate();

    const NFTDetail = () => {
        navigate('/detail')
    }

    const gotoAuction = () => {
        navigate('/auction')
    }

    return (
        <div style={{ marginTop: '100px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: 'white', borderRadius: '70px', padding: '0px', display: 'flex', alignItems: 'center' }}>
                    <button className='btn-grad'>
                        RAFFLE
                    </button>
                    <span onClick={gotoAuction} style={{ fontSize: '20px', fontFamily: 'font1', color: 'grey', margin: '0px 50px 0px 50px', cursor: 'pointer' }}>
                        AUCTIONS
                    </span>
                </div>
            </div>
            {/* <div className='nftContent'>
                <div className='nftName'>
                    <span>Winner of Yoku Corp</span>
                </div>
                <div style={{ display: 'flex', margin: '20px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <img src={defaultNft} style={{ width: '350px', height: '350px' }} />
                    </div>
                    <div style={{ width: '100%' }}>
                        <div className='nftDiv'>
                            <span style={{ flex: '1' }}>Total Winners</span>
                            <span>04</span>
                        </div>
                        <div className='nftDiv'>
                            <span style={{ flex: '1' }}>Total Entries</span>
                            <span>90</span>
                        </div>
                        <div className='nftDiv'>
                            <span style={{ flex: '1' }}>My Entries</span>
                            <span>01</span>
                        </div>
                        <div className='nftDivEnd'>
                            <div style={{ flex: '1', display: 'grid' }}>
                                <span style={{ fontSize: '20px', textDecoration: 'underline' }}>Wallet(s)</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                            </div>
                            <div style={{ display: 'grid' }}>
                                <span style={{ fontSize: '20px', textDecoration: 'underline' }}>Entries</span>
                                <span>02</span>
                                <span>01</span>
                                <span>03</span>
                                <span>05</span>
                                <span>02</span>
                                <span>01</span>
                                <span>03</span>
                                <span>05</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0px', width: '80%', flexWrap: 'wrap' }}>
                <Card
                    onClick={NFTDetail}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '27%', maxWidth: '27%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<img alt="example" src={nft1} style={{ width: '100%' }} />}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', width: '90%', top: '260px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={fPoint} style={{}} />
                                <span>Raffle Closed</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={bHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    onClick={NFTDetail}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '27%', maxWidth: '27%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<img alt="example" src={nft2} style={{ width: '100%' }} />}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', width: '90%', top: '260px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={fPoint} style={{}} />
                                <span>Raffle Closed</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={bHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    onClick={NFTDetail}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '27%', maxWidth: '27%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<img alt="example" src={nft3} style={{ width: '100%' }} />}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', width: '90%', top: '260px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={sPoint} style={{}} />
                                <span>Ends in 2d 4h 34m</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={rHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    onClick={NFTDetail}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '27%', maxWidth: '27%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<img alt="example" src={nft4} style={{ width: '100%' }} />}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', width: '90%', top: '260px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={sPoint} style={{}} />
                                <span>Ends in 2d 4h 34m</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={rHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    onClick={NFTDetail}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '27%', maxWidth: '27%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<img alt="example" src={nft5} style={{ width: '100%' }} />}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', width: '90%', top: '260px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={sPoint} style={{}} />
                                <span>Ends in 2d 4h 34m</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={rHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    onClick={NFTDetail}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '27%', maxWidth: '27%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<img alt="example" src={nft6} style={{ width: '100%' }} />}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', width: '90%', top: '260px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={sPoint} style={{}} />
                                <span>Ends in 2d 4h 34m</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={rHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
