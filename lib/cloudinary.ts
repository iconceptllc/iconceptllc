const CLOUD_NAME = "dvrw9jbbu";

const urlMap: Record<string, string> = {
  "/videos/iconcept-showreel.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769610833/iconcept-showreel_k3aelv.mp4`,
  "/videos/space-breeze.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416037/space-breeze_pwolfh.mp4`,
  "/videos/blue_swim.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416140/blue_swim_czvwus.mp4`,
  "/videos/rose_abwaje_guidness.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416121/rose_abwaje_guidness_esiaq1.mp4`,
  "/videos/rose_evil_intredeu.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416158/rose_evil_intredeu_v0vn37.mp4`,
  "/videos/trop.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769416792/trop_shps76.mp4`,
  "/videos/trop_violet_fabric_softner.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769417238/trop_violet_fabric_softner_bctj41.mp4`,
  "/videos/helin_eren.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769422889/helin_eren_phdqot.mp4`,
  "/videos/corporate.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769607006/corporate_p9ze0d.mp4`,
  "/videos/labrada_supplement.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769424181/labrada_supplement_ixspvy.mp4`,
  "/videos/2d.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769607314/2d_zwzzyb.mp4`,
  "/videos/3d.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769607244/3d_guah0w.mp4`,
   "/videos/cgi.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769514268/cgi_okugol.mp4`,
  "/videos/anamorphic.mp4": `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1769516165/anamorphic_ij9bes.mp4`,
    

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
