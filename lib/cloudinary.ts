const CLOUD_NAME = "dxtzc8b5m";

const urlMap: Record<string, string> = {
  "/videos/iconcept-showreel.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771053947/iconcept-showreel_k3aelv_dw8ppe.mp4`,
  "/videos/space-breeze.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055749/space-breeze_tiebzp.mp4`,
  "/videos/blue_swim.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055989/blue_swim_zh00qh.mp4`,
  "/videos/rose_abwaje_guidness.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771056078/rose_abwaje_guidness_ulj0vi.mp4`,
  "/videos/rose_evil_intredeu.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055728/rose_evil_intredeu_v0vn37_y6dam6.mp4`,
  "/videos/trop.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055732/trop_shps76_ef13cp.mp4`,
  "/videos/trop_violet_fabric_softner.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055678/trop_violet_fabric_softner_bctj41_vtpxod.mp4`,
  "/videos/helin_eren.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055618/helin_eren_phdqot_wjxymj.mp4`,
  "/videos/corporate.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055599/corporate_p9ze0d_dlmq0q.mp4`,
  "/videos/labrada_supplement.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771056663/labrada_supplement_xkzaiu.mp4`,
  "/videos/2d.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055470/2d_zwzzyb_ducg1v.mp4`,
  "/videos/3d.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055488/3d_guah0w_dniitt.mp4`,
   "/videos/cgi.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/cgi_okugol_vzsmr5.mp4`,
  "/videos/anamorphic.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1771055448/anamorphic_ij9bes_zodpue.mp4`,
  "/videos/motion-graphics.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1773210328/motion-graphics_pw7xg8.mp4`,
    

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
