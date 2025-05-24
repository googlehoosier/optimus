export interface GalleryItem {
  photos: {
    thumbnail: string;
    fullSize: string;
    alt: string;
    caption: string;
  }[];
  videos: {
    thumbnail: string;
    title: string;
    duration: string;
    embedUrl: string;
  }[];
}

export const galleryData: GalleryItem = {
  photos: [
    {
      thumbnail:
        'https://i.ibb.co/Jk6Bh0L/image1.jpg',
      fullSize:
        'https://i.ibb.co/Jk6Bh0L/image1.jpg',
      alt: 'Romantic movie screening setup with LOVE sign and balloon decorations',
      caption: 'Romantic Movie Night Setup',
    },
    {
      thumbnail:
        'https://i.ibb.co/xf4Z5L6/image2.jpg',
      fullSize:
        'https://i.ibb.co/xf4Z5L6/image2.jpg',
      alt: '30th Anniversary celebration setup with balloon arch and neon signs',
      caption: 'Anniversary Celebration Decor',
    },
    {
      thumbnail:
        'https://i.ibb.co/VvKn1Z8/image3.jpg',
      fullSize:
        'https://i.ibb.co/VvKn1Z8/image3.jpg',
      alt: 'Birthday celebration venue with purple balloon arch and projection screen',
      caption: 'Birthday Party Cinema Setup',
    },
    {
      thumbnail:
        'https://i.ibb.co/Kj0YgLw/image4.jpg',
      fullSize:
        'https://i.ibb.co/Kj0YgLw/image4.jpg',
      alt: 'Cozy cinema room with recliner seats and flower wall decoration',
      caption: 'Intimate Cinema Experience',
    },
    {
      thumbnail:
        'https://i.ibb.co/VDkKhRF/image5.jpg',
      fullSize:
        'https://i.ibb.co/VDkKhRF/image5.jpg',
      alt: 'Romantic screening room with floral decorations and balloon accents',
      caption: 'Romantic Screening Room',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/e7/24/db/e724dbb74c29d1d7f0edb60bba7676cd.jpg',
      fullSize:
        'https://i.pinimg.com/736x/e7/24/db/e724dbb74c29d1d7f0edb60bba7676cd.jpg',
      alt: 'Light show at night concert',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/7d/eb/19/7deb19fd8d6b110cc4e52cfafb391b64.jpg',
      fullSize:
        'https://i.pinimg.com/736x/7d/eb/19/7deb19fd8d6b110cc4e52cfafb391b64.jpg',
      alt: 'Festival food vendors',
      caption: '',
    },
    {
      thumbnail:
        'https://i.pinimg.com/736x/bb/60/64/bb60646248d97e8c9b30f639c120a573.jpg',
      fullSize:
        'https://i.pinimg.com/736x/bb/60/64/bb60646248d97e8c9b30f639c120a573.jpg',
      alt: 'Festival attendees dancing',
      caption: '',
    },
  ],
  videos: [
    {
      thumbnail:
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'RHYTHM FEST 2024 Highlights',
      duration: '3:45',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Electric Pulse Full Performance',
      duration: '8:12',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Behind the Scenes: Festival Setup',
      duration: '5:30',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Rhythm Collective Interview',
      duration: '4:15',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Sunset Sessions at River Stage',
      duration: '6:20',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      thumbnail:
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'RHYTHM FEST 2025 Announcement',
      duration: '2:45',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ],
};