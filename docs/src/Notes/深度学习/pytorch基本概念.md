---
desc: "pytorh 学习"
tags: "deep learning"
outline: deep
---

# pytorh

## 基本概念

**tensor 创建**
- `class torch.Tensor(*sizes)`: 创建一个指定形状（大小）的未初始化张量。
- `class torch.Tensor(size)`: 创建一个单个维度大小的张量。
- `class torch.Tensor(sequence)`: 根据给定的 Python 序列（如列表或元组）来创建张量。
- `class torch.Tensor(ndarray)`: 将 NumPy 的 ndarray 转换成 PyTorch 张量。
- `class torch.Tensor(tensor)`: 从另一个 PyTorch 张量中创建新的 PyTorch 张量，新旧两者数据和形状相同，但存储空间是分开的。
- `class torch.Tensor(storage)`: 从已有的torch.Storage中创建新的 tensor。

