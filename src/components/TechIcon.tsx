import React from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Database,
  Globe,
  Server,
  Layers,
  Layout,
  GitBranch,
  Send,
  Cloud,
  Boxes,
  Lock,
  Share2,
  HardDrive,
  Award,
  CheckCircle2,
  Binary,
  Flame,
  Palette,
  Grid,
  Network,
  FolderTree,
  UploadCloud,
  Coffee
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name.toLowerCase()) {
    case 'code':
      return <Code className={className} />;
    case 'terminal':
      return <Terminal className={className} />;
    case 'cpu':
      return <Cpu className={className} />;
    case 'database':
      return <Database className={className} />;
    case 'globe':
      return <Globe className={className} />;
    case 'server':
      return <Server className={className} />;
    case 'layers':
      return <Layers className={className} />;
    case 'layout':
      return <Layout className={className} />;
    case 'gitbranch':
      return <GitBranch className={className} />;
    case 'send':
      return <Send className={className} />;
    case 'cloud':
      return <Cloud className={className} />;
    case 'boxes':
      return <Boxes className={className} />;
    case 'lock':
      return <Lock className={className} />;
    case 'share2':
      return <Share2 className={className} />;
    case 'harddrive':
      return <HardDrive className={className} />;
    case 'award':
      return <Award className={className} />;
    case 'checkcircle2':
      return <CheckCircle2 className={className} />;
    case 'binary':
      return <Binary className={className} />;
    case 'flame':
      return <Flame className={className} />;
    case 'palette':
      return <Palette className={className} />;
    case 'grid':
      return <Grid className={className} />;
    case 'network':
      return <Network className={className} />;
    case 'foldertree':
      return <FolderTree className={className} />;
    case 'uploadcloud':
      return <UploadCloud className={className} />;
    case 'coffee':
      return <Coffee className={className} />;
    default:
      return <Code className={className} />;
  }
};
