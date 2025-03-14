import { FiBox, FiStar, FiZap } from "react-icons/fi";
import type { AppData } from "../types/app";
import {
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
} from "react-icons/ri";

export const appData: AppData = {
	title: "Tell Me Quiz",
	description:
		"This interactive quiz makes it easy and fun to test your knowledge of the Tell Me questions, ensuring you're fully prepared for the practical test.",
	logo: {
		type: "image",
		src: "appicon.png",
	},
	screenshots: {
		iphone: [
			"screenshots/iphone/1.png",
			"screenshots/iphone/2.png",
			"screenshots/iphone/3.png",
			"screenshots/iphone/4.png",
		],
		ipad: [
			"screenshots/ipad/1.png",
			"screenshots/ipad/2.png",
			"screenshots/ipad/3.png",
			// ...more iPad screenshots
		],
	},
	features: [
		{
			title: "Tell Me Questions 🚗",
			description: "This app provides a comprehensive quiz covering all the Tell Me questions.",
			icon: FiStar,
		},
		{
			title: "Engaging Learning 🎯",
			description: "Test yourself anytime and track your progress as you improve.",
			icon: FiZap,
		},
		{
			title: "Dark Mode 🌙",
			description: "Switch to Dark Mode for a comfortable viewing experience.",
			icon: FiBox,
		},
	],
	faqs: [
		{
			question: "Is this an official DVSA app?",
			answer: "No, this app is not an official DVSA product. It is an independent learning tool designed to help users prepare for their driving test by practicing the DVSA 'Tell Me' questions in a quiz format.",
		},
		{
			question: "The answers are rephrased. Where can I find the word by word answers?",
			answer: "The official answers can be found in the (i) icon located at the top right of each question within the app.",
		},
		{
			question: "Can I provide feedback or report an issue?",
			answer: "Yes! We’d love to hear your feedback. You can reach us at tellmequizapps@gmail.com.",
		},
	],	
	storeLinks: {
		apple: "#", // Replace with your App Store link
		google: "#", // Replace with your Google Play link
	},
	socialLinks: [
		{
			url: "#",
			icon: RiInstagramFill,
			label: "Instagram",
		},
		{
			url: "#",
			icon: RiTelegram2Fill,
			label: "Telegram",
		},
		{
			url: "#",
			icon: RiTwitterXFill,
			label: "Twitter",
		},
	],
};
