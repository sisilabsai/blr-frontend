'use client';


import MediaGallery from '../../components/ui/MediaGallery';

const media: { type: "video" | "image"; src: string }[] = [
  // Existing media
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760351225/WhatsApp_Video_2025-10-13_at_12.55.02_60c5376b_ewmy3l.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760351082/WhatsApp_Video_2025-10-13_at_12.55.09_958f95fc_qdkgwj.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760351225/WhatsApp_Video_2025-10-13_at_12.55.02_60c5376b_ewmy3l.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350879/WhatsApp_Image_2025-10-13_at_12.55.09_d93adfae_lctoju.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350868/WhatsApp_Image_2025-10-13_at_12.55.07_e2b5cc01_lnjg46.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350891/zipline-1_snt8oi.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350893/WhatsApp_Image_2025-10-13_at_12.55.09_95eb2073_fl9prx.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350893/zipline-2_vjmfj8.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350904/zipline-3_ubfdex.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350885/WhatsApp_Image_2025-10-13_at_12.55.09_dc7e0506_snhdyh.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350861/WhatsApp_Image_2025-10-13_at_12.55.07_b0670c86_alxvxa.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350861/WhatsApp_Image_2025-10-13_at_12.55.07_4fa6b76f_tjtno6.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350860/WhatsApp_Image_2025-10-13_at_12.55.06_f3f13de4_ezqey5.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350860/WhatsApp_Image_2025-10-13_at_12.55.06_e379e919_biv8n4.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350861/WhatsApp_Image_2025-10-13_at_12.55.07_b0670c86_alxvxa.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350752/WhatsApp_Image_2025-10-13_at_12.55.02_da3ad904_g37ouc.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350753/WhatsApp_Image_2025-10-13_at_12.55.03_83496dc3_dqemow.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350749/WhatsApp_Image_2025-10-13_at_12.55.01_41eadec5_lthonx.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350751/WhatsApp_Image_2025-10-13_at_12.55.01_27e33bc7_van5fw.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350750/WhatsApp_Image_2025-10-13_at_12.55.04_16d8a42c_ysupy2.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350859/WhatsApp_Image_2025-10-13_at_12.55.06_be76108c_cnmwov.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350756/WhatsApp_Image_2025-10-13_at_12.55.05_7ae8a645_wx87mj.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350757/WhatsApp_Image_2025-10-13_at_12.55.04_480aa57c_nqfwxv.jpg' },

  // New media
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760361830/new-2_hnmuni.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760361833/new-4_piblee.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760361833/new-3_grkllb.jpg' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760361862/new-5_ncs08s.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760361881/new-6_mfzrpz.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760361881/new-6_mfzrpz.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760361956/new-8_fozezj.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760361959/new-10_vzhtsm.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760361960/new-9_mschas.jpg' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760362018/new-7_p0ieul.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760362046/new-13_nyazfc.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760362065/new-12_moa0dl.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760362095/new-11_rvlmvk.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760362203/new-1_isri7b.jpg' },
];

const GalleryPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-16 left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
    </div>
    <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair-display font-bold mb-6 bg-gradient-to-r from-blue-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent">
          Media Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our authentic resort moments, activities, and magical Lake Bunyonyi experiences in images and videos.
        </p>
      </div>
      <MediaGallery media={media} />
    </div>
  </div>
);

export default GalleryPage;