const CLOUD_NAME = "dvrw9jbbu";

const urlMap: Record<string, string> = {
  "/hero-bg.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167604/iconcept/hero-bg.jpg`,
  "/md.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167649/iconcept/md.png`,
  "/iconcept-logo.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167606/iconcept/iconcept-logo.png`,
  "/iconcept-icon.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167605/iconcept/iconcept-icon.png`,
  "/circle-text.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167591/iconcept/circle-text.svg`,
  "/logo-clutch.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167643/iconcept/logo-clutch.svg`,
  "/envato-logo.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167599/iconcept/envato-logo.svg`,
  "/process.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167650/iconcept/process.svg`,
  "/clients/1.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167593/iconcept/clients/1.svg`,
  "/clients/2.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167594/iconcept/clients/2.svg`,
  "/clients/3.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167596/iconcept/clients/3.svg`,
  "/clients/4.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167597/iconcept/clients/4.svg`,
  "/imgs/serv/s1.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167630/iconcept/imgs/serv/s1.jpg`,
  "/imgs/serv/s2.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167632/iconcept/imgs/serv/s2.jpg`,
  "/imgs/serv/s3.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167634/iconcept/imgs/serv/s3.jpg`,
  "/imgs/serv/s4.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167635/iconcept/imgs/serv/s4.jpg`,
  "/testim/1.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167653/iconcept/testim/1.jpg`,
  "/testim/2.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167654/iconcept/testim/2.jpg`,
  "/testim/3.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167655/iconcept/testim/3.jpg`,
  "/testim/4.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167656/iconcept/testim/4.jpg`,
  "/testim/envato-logo.svg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167656/iconcept/testim/envato-logo.svg`,
  "/videos/iconcept-showreel.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769610833/iconcept-showreel_k3aelv.mp4`,
  "/works/w1.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167760/iconcept/works/w1.png`,
  "/works/w2.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167761/iconcept/works/w2.png`,
  "/works/w4.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167764/iconcept/works/w4.jpg`,
  "/works/w6.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167877/iconcept/works/w6.png`,
  "/works/w7.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167878/iconcept/works/w7.png`,
  "/works/w8.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769167915/iconcept/works/w8.mp4`,
  "/works/w11.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167760/iconcept/works/w11.jpg`,
  "/works/w3.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167762/iconcept/works/w3.jpg`,
  "/works/w4.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167764/iconcept/works/w4.jpg`,
  "/works/1/w01.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167715/iconcept/works/1/w01.webp`,
  "/works/1/w02.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167716/iconcept/works/1/w02.png`,
  "/works/1/w03.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167717/iconcept/works/1/w03.webp`,
  "/works/1/w1.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167718/iconcept/works/1/w1.webp`,
  "/works/1/w2.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167720/iconcept/works/1/w2.png`,
  "/works/1/w3.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167721/iconcept/works/1/w3.webp`,
  "/works/1/w4.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167722/iconcept/works/1/w4.jpg`,
  "/works/1/w7.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769167730/iconcept/works/1/w7.mp4`,
  "/works/2/1.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167733/iconcept/works/2/1.png`,
  "/works/2/2.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167738/iconcept/works/2/2.png`,
  "/works/2/3.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167739/iconcept/works/2/3.jpg`,
  "/works/2/4.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167741/iconcept/works/2/4.webp`,
  "/works/2/6.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167742/iconcept/works/2/6.webp`,
  "/works/2/7.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167743/iconcept/works/2/7.webp`,
  "/works/2/8.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167744/iconcept/works/2/8.webp`,
  "/works/2/9.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167745/iconcept/works/2/9.webp`,
  "/works/2/11.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167735/iconcept/works/2/11.webp`,
  "/works/2/12.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167736/iconcept/works/2/12.webp`,
  "/works/2/13.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167737/iconcept/works/2/13.webp`,
  "/works/3/w1.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167746/iconcept/works/3/w1.jpg`,
  "/works/3/w2.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167749/iconcept/works/3/w2.jpg`,
  "/works/3/w3.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167750/iconcept/works/3/w3.jpg`,
  "/works/3/w6.png": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167751/iconcept/works/3/w6.png`,
  "/works/3/w11.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167746/iconcept/works/3/w11.jpg`,
  "/works/3/w12.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167748/iconcept/works/3/w12.jpg`,
  "/works/3/w14.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167748/iconcept/works/3/w14.jpg`,
  "/works/4/1.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167752/iconcept/works/4/1.webp`,
  "/works/4/2.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167752/iconcept/works/4/2.webp`,
  "/works/4/3.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167753/iconcept/works/4/3.webp`,
  "/works/4/4.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167755/iconcept/works/4/4.webp`,
  "/works/4/5.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167756/iconcept/works/4/5.webp`,
  "/works/4/6.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167757/iconcept/works/4/6.webp`,
  "/works/4/7.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167758/iconcept/works/4/7.webp`,
  "/works/4/8.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769167759/iconcept/works/4/8.webp`,
  "/works/flc.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769415984/flc_svm2ce.webp`,
  "/works/aptech.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769415984/aptech_aghszj.webp`,
  "/works/almeshal.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769415984/almeshal_fcmrik.webp`,
  "/works/eindravilas.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769415981/eindravilas_ig6qfg.webp`,
  "/works/leinfort.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769415981/leinfort_qasowi.webp`,
  "/works/wordpress-website-for-thc.jpg": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769415982/wordpress-website-for-thc_ahkum6.jpg`,
  "/works/space-breeze.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416037/space-breeze_pwolfh.mp4`,
  "/works/blue_swim.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416140/blue_swim_czvwus.mp4`,
  "/works/rose_abwaje_guidness.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416121/rose_abwaje_guidness_esiaq1.mp4`,
  "/works/rose_evil_intredeu.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416158/rose_evil_intredeu_v0vn37.mp4`,
  "/works/trop.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416792/trop_shps76.mp4`,
  "/works/trop_violet_fabric_softner.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769417238/trop_violet_fabric_softner_bctj41.mp4`,
  "/works/helin_eren.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769422889/helin_eren_phdqot.mp4`,
  "/works/corporate.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769607006/corporate_p9ze0d.mp4`,
  "/works/labrada_supplement.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769424181/labrada_supplement_ixspvy.mp4`,
  "/works/2d.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769607314/2d_zwzzyb.mp4`,
  "/works/3d.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769607244/3d_guah0w.mp4`,
  "/works/dac.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/upload/v1769430807/dac_skaljo.webp`,
  "/works/snickers.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769598014/snickers_zfrmsg.webp`,
  "/works/snickers1.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769598015/snickers1_hvaraz.webp`,
  "/works/snickers2.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769598014/snickers2_uzgmu5.webp`,
  "/works/snickers3.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769598015/snickers3_blvdjt.webp`,
  "/works/snickers4.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769598014/snickers4_vvzgbn.webp`,
  "/works/americana-game.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769599140/americana-game_qr1rg4.webp`,
  "/works/americana-game1.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769599140/americana-game1_jbrofd.webp`,
  "/works/americana-game2.webp": `https://res.cloudinary.com/${CLOUD_NAME}/v1769599139/americana-game2_wlnrxa.webp`,
  "/works/americana-game3.webp": `https://res.cloudinary.com/${CLOUD_NAME}/v1769599139/americana-game3_wzkqnv.webp`,
  "/works/persil.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600139/persil_x3c1v0.webp`,
  "/works/persil1.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600138/persil1_iblntu.webp`,
  "/works/persil2.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600138/persil2_wxqpf5.webp`,
  "/works/persil3.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600138/persil3_va0vkb.webp`,
  "/works/cgi.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769514268/cgi_okugol.mp4`,
  "/works/anamorphic.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769516165/anamorphic_ij9bes.mp4`,
    "/works/dac.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600705/dac_elgo2h.webp`,
    "/works/dac1.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600704/dac1_z6zwnt.webp`,
    "/works/dac2.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600703/dac2_njhujh.webp`,
    "/works/dac3.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600714/dac3_hkwkon.webp`,
    "/works/extra.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600497/extra_ip03fi.webp`,
    "/works/extra1.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600497/extra1_treeju.webp`,
    "/works/extra2.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600497/extra2_ki2lhe.webp`,
    "/works/extra3.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769600496/extra3_ezk2yg.webp`,
    "/works/americana.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769606692/anericana_nvhrqm.webp`,
    "/works/americana1.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769606691/americana1_vdjava.webp`,
    "/works/americana2.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769606692/americana2_ma8xzo.webp`,
    "/works/americana3.webp": `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1769606692/americana3_ukymja.webp`,

};

/**
 * Get the Cloudinary URL for a local public path.
 * Falls back to dynamic URL generation if not found in the map.
 */
export function cdn(localPath: string): string {
  if (urlMap[localPath]) {
    return urlMap[localPath];
  }

  // Dynamically generate Cloudinary URL for files not in the map
  const videoExtensions = [".mp4", ".webm", ".mov", ".avi"];
  const isVideo = videoExtensions.some((ext) => localPath.toLowerCase().endsWith(ext));
  const resourceType = isVideo ? "video" : "image";

  // Remove leading slash for the path
  const cleanPath = localPath.startsWith("/") ? localPath.slice(1) : localPath;

  return `https://res.cloudinary.com/${CLOUD_NAME}/${resourceType}/upload/${cleanPath}`;
}

export default urlMap;
