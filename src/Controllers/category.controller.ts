import { Request, Response } from 'express';
import Category, { ICategory } from '../Models/category.model';

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category: ICategory = new Category(req.body);
    const savedCategory: ICategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories: ICategory[] = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category: ICategory | null = await Category.findById(req.params.id);
    if (!category) {
      res.status(404).json({ error: 'Category not found' });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedCategory: ICategory | null = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedCategory) {
      res.status(404).json({ error: 'Category not found' });
      return;
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedCategory: ICategory | null = await Category.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCategory) {
      res.status(404).json({ error: 'Category not found' });
      return;
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
