import RoomDetail from '@/components/RoomDetail';

interface RoomDetailPageProps {
  params: {
    id: string;
  };
}

export default function RoomDetailPage({ params }: RoomDetailPageProps) {
  return <RoomDetail roomId={params.id} />;
}