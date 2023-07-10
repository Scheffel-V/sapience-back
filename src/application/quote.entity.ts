import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';
import { Author } from './author.entity';

/* 
#[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    private ?string $text = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $priority = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $lastReviewDate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $reviewHistory = null;

    #[ORM\Column(nullable: true)]
    private ?int $bookChapter = null;

    #[ORM\ManyToOne(inversedBy: 'quotes')]
    private ?Book $bookId = null;

    #[ORM\ManyToOne(inversedBy: 'quotes')]
    private ?Author $authorId = null;

    #[ORM\Column(length: 255)]
    private ?string $visibility = null;

    #[ORM\Column(nullable: true)]
    private ?int $votes = null;
*/
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  priority: string;

  @Column()
  lastReviewDate: Date;

  //TODO: reviewHistory field

  @Column()
  bookChapter: number;

  @ManyToOne(() => Book, (book) => book.quotes)
  book: Book;

  @ManyToOne(() => Author, (author) => author.quotes)
  author: Author;

  @Column()
  visibility: string;

  @Column()
  votes: number;
}
