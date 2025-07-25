import { Tag } from '@/components/Tag.style';
import type { BoxProps } from '@mui/material';
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
  type Breakpoint,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { urbanist } from 'src/fonts/fonts';

export const BlogArticleCardContainer = styled(Card)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  maxWidth: 416,
  border: 'unset',
  padding: theme.spacing(2),
  borderRadius: '32px',
  background: (theme.vars || theme).palette.bgTertiary.main,
  transition: 'background-color 250ms',
  boxShadow: (theme.vars || theme).shadows[2],
  [theme.breakpoints.up('sm' as Breakpoint)]: {
    minWidth: 250,
    width: 416,
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: (theme.vars || theme).palette.alphaLight300.main,
    ...theme.applyStyles('light', {
      backgroundColor: `color-mix(in srgb, ${(theme.vars || theme).palette.white.main} 96%, black 4%)`,
    }),
  },
}));

export const BlogArticleCardDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('sm' as Breakpoint)]: {
    flexDirection: 'row',
  },
}));

export const BlogArticleMetaDate = styled(Typography)(({ theme }) => ({
  fontSize: 'inherit',
  '&:after': {
    content: '"•"',
    margin: theme.spacing(0, 0.5),
  },
}));

export const BlogArticleMetaReadingTime = styled(Typography)(({ theme }) => ({
  fontSize: 'inherit',
}));

export const BlogArticleCardMetaSkeleton = styled(Skeleton)(({ theme }) => ({
  width: 150,
  height: 16,
  transform: 'unset',
  borderRadius: '8px',
}));

export const BlogArticleCardImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '16px',
  objectFit: 'cover',
  aspectRatio: 1.6,
  objectPosition: 'left',
}));

export const BlogArticleCardImageSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '100%',
  aspectRatio: 1.6,
  transform: 'unset',
  height: 'auto',
  borderRadius: '16px',
}));

export const BlogArticleCardContent = styled(CardContent)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(2),
  '&:last-child': { paddingBottom: theme.spacing(1) },
}));

export const BlogArticleCardTitle = styled(Typography)(({ theme }) => ({
  color: 'inherit',
  fontWeight: 700, //todo: use typography
  fontSize: '24px',
  fontFamily: urbanist.style.fontFamily,
  lineHeight: '32px',
  minHeight: '64px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
}));

export const BlogArticleCardTitleSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '100%',
  height: '64px',
  transform: 'unset',
  borderRadius: '12px',
  minHeight: '64px',
}));

interface BlogArticleCardMetaContainerProps extends BoxProps {
  hasTags: boolean;
}

export const BlogArticleCardMetaContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hasTags',
})<BlogArticleCardMetaContainerProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  height: 40,
  color: (theme.vars || theme).palette.text.primary,
  '*': { textWrap: 'nowrap' },
  [theme.breakpoints.up('sm' as Breakpoint)]: {},
  variants: [
    {
      props: ({ hasTags }) => hasTags,
      style: {
        [theme.breakpoints.up('sm' as Breakpoint)]: {
          marginLeft: theme.spacing(1),
        },
      },
    },
  ],
}));

export const BlogArticleCardTag = styled(Tag)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '18px',
  overflow: 'hidden',
  marginTop: theme.spacing(2),
  marginBottom: 0,
  textOverflow: 'ellipsis',
  height: '40px',
  [theme.breakpoints.up('sm' as Breakpoint)]: {
    marginTop: 0,
    maxWidth: '50%',
  },
  ':not(:first-of-type)': {
    marginLeft: theme.spacing(0.5),
  },
}));

export const BlogArticleCardTagSkeleton = styled(Skeleton)(({ theme }) => ({
  width: 120,
  fontSize: '14px',
  marginTop: theme.spacing(2),
  borderRadius: '20px',
  marginBottom: 0,
  transform: 'unset',
  height: '40px',
  [theme.breakpoints.up('sm' as Breakpoint)]: {
    marginTop: 0,
    maxWidth: '50%',
  },
  ':not(:first-of-type)': {
    marginLeft: theme.spacing(0.5),
  },
}));
