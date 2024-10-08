import React from "react";
import { Box, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const Footer = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa";

	return (
		<Box
			sx={{
				backgroundColor: "#1c222c",
				color: "#ffffff",
				py: 4,
				mt: 3,
				width: "100%",
				direction: isRtl ? "rtl" : "ltr"
			}}
		>
			<Box
				sx={{
					width: "100%",
					mx: "auto",
					px: { xs: 5, md: 15 }
				}}
				textAlign={{ xs: "left" }}
			>
				<Grid container spacing={6} justifyContent="space-between">
					<Grid item xs={12} sm={3}>
						<Typography
							variant="h6"
							sx={{
								mb: 2,
								fontWeight: "500"
							}}
						>
							{t("footer.quickLinks")}
						</Typography>
						<Link
							href="https://blog.smswithoutborders.com/"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1 }}
						>
							{t("footer.blog")}
						</Link>
						<Link
							href="https://docs.smswithoutborders.com/"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1 }}
						>
							{t("footer.documentation")}
						</Link>
						<Link
							href="/privacy-policy"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1 }}
						>
							{t("footer.privacyPolicy")}
						</Link>
					</Grid>

					<Grid item xs={12} sm={3}>
						<Typography
							variant="h6"
							sx={{
								mb: 2,
								fontWeight: "500"
							}}
						>
							{t("footer.community")}
						</Typography>
						<Box>
							<IconButton
								href="https://github.com/smswithoutborders"
								aria-label="GitHub"
								sx={{ color: "#ffffff", mr: 1 }}
							>
								<FaGithub size={24} />
							</IconButton>
							<IconButton
								href="https://twitter.com/RelaySMS"
								aria-label="Twitter"
								sx={{ color: "#ffffff", mr: 1 }}
							>
								<FaTwitter size={24} />
							</IconButton>
							<IconButton
								href="https://t.me/deku_sms"
								aria-label="Telegram"
								sx={{ color: "#ffffff" }}
							>
								<FaTelegram size={24} />
							</IconButton>
						</Box>
					</Grid>

					<Grid item xs={12} sm={3}>
						<Typography
							variant="h6"
							sx={{
								mb: 2,
								fontWeight: "500"
							}}
						>
							{t("footer.downloads")}
						</Typography>
						<Link
							href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1 }}
						>
							{t("footer.relaySMS")}
						</Link>
						<Link
							href="https://apps.apple.com/us/app/relaysms/id6630382970"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1 }}
						>
							{t("footer.dekuSMS")}
						</Link>
					</Grid>

					<Grid
						item
						xs={12}
						sm={2}
						textAlign={{ sm: "right" }}
						sx={{
							width: "100%",
							mx: "auto",
							px: { xs: 5, md: 30 }
						}}
					>
						<LanguageSwitcher />
					</Grid>
				</Grid>
				<Divider sx={{ my: 4, borderColor: "#424242" }} />
				<Grid container spacing={4} justifyContent="space-between" alignItems="center">
					<Grid item xs={12}>
						<Typography variant="body2" sx={{ fontSize: "0.835rem", textAlign: "center" }}>
							{t("footer.copyright")}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Footer;
