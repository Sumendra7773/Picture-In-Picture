const VideoElement = document.getElementById('Video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to Video element ,then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		VideoElement.srcObject = mediaStream;
		VideoElement.onloadedmetadata = () => {
			VideoElement.play();
		};
	} catch (error) {
		// catch error here
		console.log('whoops,error here', error);
	}
}

button.addEventListener('click', async () => {
	// Disable Button
	button.Disabled = true;
	// Start Picture in Picture
	await VideoElement.requestPictureInPicture();
	// Reset Button
	button.Disabled = false;
});

// on load
selectMediaStream();
