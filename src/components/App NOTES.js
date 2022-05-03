/*notes on bootstrap*/

return (
		<div>
			<Navbar web3Handler={web3Handler} account={account} explorerURL={explorerURL} />
			<main>
				<section id='welcome' className='welcome'>

					<Row className='header my-0 p-2 mb-0 pb-0'>
						<h1>SMART SHADES</h1>
						<p className='sub-header'>The NFTs that can help you Get Smarter!</p>
					</Row>

					<Row className='flex m-3'>
						<Col md={5} lg={4} xl={5} xxl={4} className='text-center'>
							<img
								src={showcase}
								alt="Get Smarter"
								className='showcase'
							/>
						</Col>
						<Col md={5} lg={4} xl={5} xxl={4} className='text-center'>
							{revealTime !== 0 && <Countdown date={currentTime + (revealTime - currentTime)} className='countdown mx-3' />}
							<p className='text'>
								Introducing Smart Shades NFTs, the NFTs that can help you get smarter!... Ok, they themselves wont help you get smarter, but if you buy one, you’ll get free access to a “Get Smarter” guide and training software that takes you step-by-step through the best way known to science to help boost your intelligence!
							</p>
							<a href="#about" className='button mx-3'>Learn More!</a>
						</Col>
					</Row>
				</section>

				<section id='about' className='about'>
					<Row className='flex m-3'>
						<h2 className='text-center p-3'>About the Collection</h2>
						<Col md={5} lg={4} xl={5} xxl={4} className='text-center'>
							<img src={nftex} alt="Multiple Crypto Punks" className='showcase' />
						</Col>
						<Col md={5} lg={4} xl={5} xxl={4}>
							{isError ? (
								<p>{message}</p>
							) : (
						<div>
									<h3>Mint your NFT in</h3>
									{revealTime !== 0 && <Countdown date={currentTime + (revealTime - currentTime)} className='countdown' />}
									<ul>
										<li>500 generated SMART images using an art generator</li>
										<li>Mint using a credit card or connect a crypto wallet</li>
										<li>Viewable on Opensea shortly after minting</li>
									</ul>

									{isMinting ? (
										<Spinner animation="border" className='p-3 m-2' />
									) : (
							<div>
							   <button onClick={mintNFTHandler} className='button mint-button mt-3'>Mint</button>

							   <CrossmintPayButton
								   className='button mint-button mt-3'
								   collectionTitle="Smart Shades"
								   collectionDescription="A line of indy NFTs that might help you Get Smarter!"
								   collectionPhoto="https://gateway.pinata.cloud/ipfs/QmQyPmkSuZUi1pU82pkj86vGzBeWeqnexvkeC61ofYFhux/1.png"
								   environment="staging"
								   clientId="f7eae5a6-d2cb-4e3c-b5e6-033f71e1782a"
								   mintConfig={{
									   price: "2.0",
									   //onClick={mintNFTHandler}
									   _mintAmount: "1"
							       }}
							  	/>
							</div>
									)}

									{ownerOf.length > 0 &&
										<p><small>View your NFT on
											<a
												href={`${openseaURL}/assets/${gsTest._address}/${ownerOf[0]}`}
												target='_blank'
												style={{ display: 'inline-block', marginLeft: '3px' }}>
												OpenSea
											</a>
										</small></p>}
						</div>
							)}
						</Col>
					</Row>

					<Row style={{ marginTop: "100px" }}>
						<Col>
							{gsTest &&
								<a
									href={`${explorerURL}/address/${gsTest._address}`}
									target='_blank'
									className='text-center'>
									{gsTest._address}
								</a>
							}
						</Col>
					</Row>

				</section>
			</main>
			<footer>

			</footer>
		</div>
	)