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
        'https://i.ibb.co/6RKyLXp/image6.jpg',
      fullSize:
        'https://i.ibb.co/6RKyLXp/image6.jpg',
      alt: 'Modern cinema room with LED ceiling lights and balloon decorations',
      caption: 'Modern Cinema Experience',
    },
    {
      thumbnail:
        'https://i.ibb.co/TRzXK4k/image7.jpg',
      fullSize:
        'https://i.ibb.co/TRzXK4k/image7.jpg',
      alt: 'Luxury cinema setup with hanging floral decor and golden balloon arch',
      caption: 'Luxury Screening Room',
    },
    {
      thumbnail:
        'https://i.ibb.co/xFdQyZN/image8.jpg',
      fullSize:
        'https://i.ibb.co/xFdQyZN/image8.jpg',
      alt: 'Premium cinema room with recliner seats and elegant decor',
      caption: 'Premium Cinema Setup',
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